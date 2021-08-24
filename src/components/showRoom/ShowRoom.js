import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import queryString from "query-string";
import Gallery from "react-photo-masonry";
import Carousel, { Modal, ModalGateway } from "react-images";

import LoadingPageChild from "../../loading/LoadingPageChild";
import Pagination from "../pagination/Pagination";

const initialState = {
  data: [],
  err: "",
  loading: false,
};

const ShowRoom = () => {
  const [product, setProduct] = useState(initialState);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const { data, err, loading } = product;

  const [pagination, setPagination] = useState({
    limit: 9,
    page: 1,
    totalPage: 1,
  });

  const [filters, setFilters] = useState({
    page: 1,
    limit: 9,
  });

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setProduct((prev) => ({ ...prev, loading: true }));
        const paramsString = queryString.stringify(filters);
        const res = await axios.get(`/show-room?${paramsString}`);

        if (!res)
          return setProduct((prev) => ({
            ...prev,
            err: "Data is not already.",
          }));

        setProduct((prev) => ({
          ...prev,
          data: res.data.result,
          err: "",
          loading: false,
        }));
        setPagination(res.data.pagination);
      } catch (err) {
        err.response.data.msg && console.log(err.response.data.msg);
      }
    };
    getData();
  }, [filters]);

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage });
  };

  if (err) console.log(err);
  return (
    <>
      <div className="box-show">
        {loading && <LoadingPageChild />}
        <div className="__box-show">
          <Gallery photos={data} direction={"row"} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={data.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
      {pagination.totalPage > 1 && (
        <Pagination
          className="pagination"
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default ShowRoom;
