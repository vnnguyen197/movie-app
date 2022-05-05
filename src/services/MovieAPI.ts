import axiosClient from "../api/axiosClient";

const movieAPI = {  
  getList: (data: any) => {
    const url: string = `/popular?api_key=${process.env.REACT_APP_KEY_API}`;
    const params = {
      page: data.page,
    };
    return axiosClient.get(url, { params });
  },

  getDetailMovie: (data: any) => {
    const url = `/${data}`
    const params = {
      api_key: "b0e9f0e07e242c48387195736fde108b",
    };
    return axiosClient.get(url, { params });
  },

  getPeople: (data: any) => {
    const url = `/${data}/credits?`
    const params = {
      api_key: "b0e9f0e07e242c48387195736fde108b",
    };
    return axiosClient.get(url, { params });
  },

  getAllVideos: (data: any) => {
    const url = `/${data}/videos`;
    const params = {
      api_key: "b0e9f0e07e242c48387195736fde108b",
      language: "en-US",
    };
    return axiosClient.get(url, { params });
  },

  getAllImages: (data: any) => {
    const url = `/${data}/images`;
    const params = {
      api_key: "b0e9f0e07e242c48387195736fde108b",
    };
    return axiosClient.get(url, { params });
  },

  getKeyWordMovie: (data: string) => {
    const url = `/${data}/keywords`;
    const params = {
      api_key: "b0e9f0e07e242c48387195736fde108b",
    };
    return axiosClient.get(url, { params });
  },

  getReviewMovie: (data: string) => {
    const url = `/${data}/reviews`;
    const params = {
      api_key: "b0e9f0e07e242c48387195736fde108b",
      page: 1,
    };
    return axiosClient.get(url, { params });
  },

  getRecommendations: (data: string) => {
    const url = `/${data}/recommendations`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      language: "en-US",
      page: 1,
    };
    return axiosClient.get(url, { params });
  },

};

export default movieAPI;