import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} - COMIC VERSE`;
  }, [title]);
};
export default useTitle;
