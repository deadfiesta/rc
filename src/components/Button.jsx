import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ type, size, width, children, icon }) => {
  const cssTypeClasses = (type) => {
    switch (type) {
      default:
      case 'primary':
        return 'bg-primary-500 border border-primary-500 text-neutral-100 hover:bg-primary-400 hover:border-primary-400 active:bg-primary-600 active:border-primary-600 disabled:bg-primary-300 disabled:border-primary-300 disabled:text-primary-200';
        break;
      case 'secondary':
        return 'bg-neutral-100 border border-primary-500 text-primary-500 hover:bg-primary-200 active:bg-primary-300 disabled:bg-neutral-200 disabled:border-neutral-400 disabled:text-neutral-400';
        break;
      case 'icon':
        return 'text-primary-500 hover:text-primary-400 active:text-primary-600 disabled:text-primary-300';
    }
  };
  const cssSizeClasses = (size) => {
    switch (size) {
      default:
      case 'lg':
        return 'py-4 px-12 gap-4';
        break;
      case 'md':
        return 'py-2 px-6 gap-2';
        break;
    }
  };

  return (
    <>
      <button
        className={`${cssTypeClasses(type)} ${
          size && cssSizeClasses(size)
        } ${width} flex items-center justify-center rounded font-bold cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary-500`}
      >
        {children}
        {!children && icon && (
          <div className="text-2xl h-6 w-6 grid place-items-center block">
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        {children && icon && (
          <div className="text-base">
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
      </button>
    </>
  );
};

export default Button;

Button.defaultProps = {
  type: 'primary',
  width: 'w-fit',
  icon: false,
};
