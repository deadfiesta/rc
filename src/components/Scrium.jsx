const Scrium = ({ show, setShow, css }) => {
  return (
    <div
      onClick={() => setShow(false)}
      className={`bg-black ${
        show ? 'opacity-60' : 'opacity-0'
      } transition-opacity fixed top-0 left-0 w-full h-full z-10 ${!css ? '' : css}`}
    />
  );
};
 
export default Scrium;
