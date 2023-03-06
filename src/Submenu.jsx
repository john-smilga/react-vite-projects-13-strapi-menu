import { useRef } from 'react';
import { useGlobalContext } from './context';
import sublinks from './data';
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const submenuContainer = useRef(null);
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    // Check if the mouse is outside the modal
    if (clientX < left || clientX > right || clientY > bottom) {
      // Do something here, such as closing the modal
      setPageId(null);
    }
  };
  // const handleMouseOver = (event) => {
  //   const submenu = submenuContainer.current;
  //   const { left, right, bottom } = submenu.getBoundingClientRect();
  //   const { clientX, clientY } = event;
  //   console.log(left, right, bottom);
  //   console.log(clientX, clientY);
  // };
  return (
    <div
      ref={submenuContainer}
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      // onMouseOver={handleMouseOver}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;

          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
