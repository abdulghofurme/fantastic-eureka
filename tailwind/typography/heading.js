const classPrefix = ".mkr_ty-heading";

module.exports = function ({ theme, addComponents }) {
  const generalStyle = {
    fontFamily: theme("fontFamily.nunito"),
  };
  const sizes = [
    {
      label: "2xl",
      additionalStyle: {
        lineHeight: theme("lineHeight.9"),
      },
    },
    {
      label: "xl",
      additionalStyle: {
        lineHeight: theme("lineHeight.7"),
      },
    },
    {
      label: "l",
      additionalStyle: {
        lineHeight: theme("lineHeight.6"),
      },
    },
    {
      label: "m",
      additionalStyle: {
        fontWeight: theme("fontWeight.bold"),
        lineHeight: theme("lineHeight.6"),
      },
      noVariants: true,
    },
    {
      label: "s",
      additionalStyle: {
        fontWeight: theme("fontWeight.bold"),
        lineHeight: theme("lineHeight.5"),
      },
      noVariants: true,
    },
    {
      label: "xs",
      additionalStyle: {
        fontWeight: theme("fontWeight.bold"),
        lineHeight: theme("lineHeight.4"),
      },
      noVariants: true,
    },
  ];
  const variants = [
    {
      label: "bold",
      style: {
        fontWeight: theme("fontWeight.extrabold"),
      },
    },
    {
      label: "regular",
      style: {
        fontWeight: theme("fontWeight.bold"),
      },
    },
  ];
  const result = sizes.reduce(
    (result, { label: size, additionalStyle, noVariants }) => {
      const sizeClassName = `${classPrefix}-${size}`;
      const sizeStyle = {
        ...generalStyle,
        ...(additionalStyle || {}),
        fontSize: theme(`fontSize.heading-${size}`),
      };
      result[sizeClassName] = sizeStyle;
      if (noVariants) return result;

      variants.forEach(({ label, style }) => {
        result[`${sizeClassName}--${label}`] = {
          ...sizeStyle,
          ...style,
        };
      });

      return result;
    },
    {}
  );
  return result;
};
