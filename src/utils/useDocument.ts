const setTitle = (title: string) => (document.title = `${import.meta.env.VITE_APP_TITLE} - ${title}`);
export const useDocument = () => {
  return {
    setTitle,
  };
};
