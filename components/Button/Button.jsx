import {
  Button as MaterialButton,
} from '@mui/material';

const getButtonVariant = (secondary, tertiary) => {
  if (secondary) return 'outlined';
  if (tertiary) return 'text';
  return 'contained';
};

const Button = ({
  size,
  secondary,
  tertiary,
  disabled,
  ...otherProps
}) => {
  const variant = getButtonVariant(secondary, tertiary);
  return (
    <MaterialButton
      disableElevation
      size={size}
      variant={variant}
      disabled={disabled}
      {...otherProps}
    />
  );
};

export default Button;
