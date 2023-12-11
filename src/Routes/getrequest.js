import axios from "axios";
import { BASE_URL } from "../Domain";

const getHeaders = () => {
  const token = localStorage.getItem("access_token");
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
};

export const getBusiness = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${BASE_URL}/api/Business`, { header })
    .then((res) => {
      cb(null, res);
    })
    .catch((err) => {
      cb(err, null);
    });
};
export const getEconomics = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${BASE_URL}/api/Economics`, { header })
    .then((res) => {
      cb(null, res);
    })
    .catch((err) => {
      cb(err, null);
    });
};
export const getEntertainment = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${BASE_URL}/api/Entertainment`, { header })
    .then((res) => {
      cb(null, res);
    })
    .catch((err) => {
      cb(err, null);
    });
};
export const getPolitics = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${BASE_URL}/api/Politics`, { header })
    .then((res) => {
      cb(null, res);
    })
    .catch((err) => {
      cb(err, null);
    });
};
export const getLifestyle = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${BASE_URL}/api/Lifestyle`, { header })
    .then((res) => {
      cb(null, res);
    })
    .catch((err) => {
      cb(err, null);
    });
};
export const getTechnoloy = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${BASE_URL}/api/Technoloy`, { header })
    .then((res) => {
      cb(null, res);
    })
    .catch((err) => {
      cb(err, null);
    });
};
export const Worldnews = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${BASE_URL}/api/Worldnews`, { header })
    .then((res) => {
      cb(null, res);
    })
    .catch((err) => {
      cb(err, null);
    });
};
export const TodayPost = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${BASE_URL}/api/TodayPost`, { header })
    .then((res) => {
      cb(null, res);
    })
    .catch((err) => {
      cb(err, null);
    });
};
export const getGallary = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${BASE_URL}/api/Gallary`, { header })
    .then((res) => {
      cb(null, res);
    })
    .catch((err) => {
      cb(err, null);
    });
};
