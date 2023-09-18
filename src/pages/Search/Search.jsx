// rfc
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSearchParams } from "react-router-dom";
import {
  getCategoryListApi,
  getProductByKeyword,
  sortListArrAction,
  getProdByCategory,
} from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";

let timeout = null;
export default function Search() {
  const { arrProSearch } = useSelector((state) => state.productReducer);
  const { arrProdCategory } = useSelector((state) => state.productReducer);
  const [nameCategory, setNameCategory] = useState(null);

  //searchParam
  const [searchParam, setSearchParam] = useSearchParams();
  const keyword = searchParam.get("q");

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      keyword: "",
    },
    validationSchema: Yup.object().shape({
      keyword: Yup.string(),
    }),
    onSubmit: (values) => {
      setSearchParam({
        q: values.keyword,
      });
      console.log(values);
    },
  });
  // handleSort
  const handleSort = (sort) => {
    const action = sortListArrAction(sort);
    dispatch(action);
  };
  // search
  useEffect(() => {
    timeout = setTimeout(() => {
      const action = getProductByKeyword(keyword);
      dispatch(action);
    }, 1000);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [keyword]);
  // all category
  useEffect(() => {
    timeout = setTimeout(() => {
      const action = getCategoryListApi();
      dispatch(action);
    }, 1000);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, []);
  // list name category
  useEffect(() => {
    timeout = setTimeout(() => {
      if (nameCategory) {
        const action = getProdByCategory(nameCategory);
        dispatch(action);
      }
    }, 1000);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [nameCategory]);
  return (
    <div className="search">
      <div className="main__wrap">
        <div className="search__header">
          <form className="main__search" onSubmit={formik.handleSubmit}>
            <div className="main__right form-group">
              <p className="search__title">Search</p>
              <input
                className="search__form form-control"
                placeholder="Search Product"
                name="keyword"
                id="keyword"
                onChange={formik.handleChange}
              />
            </div>
            <div className="main__left">
              <button className="btn__search" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        {/* ---- */}
        <div className="search__result">
          <div className="body__wrap">
            <div className="body__title">
              <h3 className="title">Search result</h3>
            </div>
            <div className="body__option">
              <div className="search__price ">
                <p className="price__title">Price</p>
                <div className="price__button">
                  <button
                    className="btn__decrease"
                    onClick={() => {
                      handleSort("desc");
                    }}
                  >
                    decrease<i className="fa fa-arrow-down"></i>
                  </button>
                  <button
                    className="btn__ascending"
                    onClick={() => {
                      handleSort("asc");
                    }}
                  >
                    ascending<i className="fa fa-arrow-up"></i>
                  </button>
                </div>
              </div>
              <div className="option__branchs">
                <p className="branch__title">Branchs</p>
                <select
                  className="select__branchs"
                  id=""
                  name=""
                  onChange={(e) => {
                    setNameCategory(e.target.value);
                  }}
                >
                  <option value="">SELECT</option>
                  {arrProdCategory.map((name, index) => {
                    return (
                      <option value={name?.id} key={index}>
                        {name?.category}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* === */}
            <div className="search__product">
              <div className="row">
                {arrProSearch?.map((item, index) => {
                  return (
                    <div className="col-4" key={index}>
                      <Product product={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
