import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Link = ({ children, type, width, icon, iconPosition, href }) => {
  const gap = (width) => {
    return width === 'w-full' ? 'justify-between' : 'gap-2';
  };
  const flexDirection = (iconPosition) => {
    return iconPosition === 'left' ? 'flex-row-reverse' : '';
  };
  const styled = (type) => {
    return type === 'colored' ? 'text-secondary-500' : type === 'dark' ? 'text-neutral-100' : 'text-neutral-900';
  };
  return (
    <a
      href={href}
      style={{ textDecorationSkipInk: 'none' }}
      className={`flex cursor-pointer items-center whitespace-nowrap ${gap(
        width
      )} ${flexDirection(iconPosition)} ${styled(type)} hover:underline`}
    >
      {children}
      {icon && <FontAwesomeIcon icon={icon === true ? faChevronRight : icon} />}
    </a>
  );
};

export default Link;
