const logo = `${import.meta.env.VITE_APP_COMPANY_LOGO_PATH}`;
const companyName = `${import.meta.env.VITE_APP_COMPANY_NAME || "Company Name"}`;
export const useApplication = () => {
  return {
    $app: {
      logo,
      companyName,
    },
    $auth: {},
  };
};
