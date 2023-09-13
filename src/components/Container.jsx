const Container = ({ children, css }) => {
  return (
    <>
      <div className={`max-w-7xl px-4 xl:px-0 xl:mx-auto ${css}`}>
        {children}
      </div>
    </>
  );
};

export default Container;

Container.defaultProps = {
  css: '',
};
