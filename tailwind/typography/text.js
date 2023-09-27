const classPrefix = ".mkr_ty-text";

module.exports = function ({ theme }) {
  const generalStyle = {
    fontFamily: theme("fontFamily.nunito"),
  };
  const sizes = [
    {
      label: "2xl",
      additionalStyle: {
        lineHeight: theme("lineHeight.10"),
      },
    },
    {
      label: "xl",
      additionalStyle: {
        lineHeight: theme("lineHeight.9"),
      },
    },
    {
      label: "l",
      additionalStyle: {
        lineHeight: theme("lineHeight.8"),
      },
    },
    {
      label: "m",
      additionalStyle: {
        lineHeight: theme("lineHeight.6"),
      },
    },
    {
      label: "s",
      additionalStyle: {
        lineHeight: theme("lineHeight.5"),
      },
    },
    {
      label: "xs",
      additionalStyle: {
        lineHeight: theme("lineHeight.4"),
      },
    },
    {
      label: "2xs",
      additionalStyle: {
        lineHeight: theme("lineHeight.3"),
      },
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
        fontWeight: theme("fontWeight.semibold"),
      },
    },
  ];
  const result = sizes.reduce((result, { label: size, additionalStyle }) => {
    const sizeClassName = `${classPrefix}-${size}`;
    const sizeStyle = {
      ...generalStyle,
      ...(additionalStyle || {}),
      fontSize: theme(`fontSize.nominal-${size}`),
    };
    result[sizeClassName] = sizeStyle;

    variants.forEach(({ label, style }) => {
      result[`${sizeClassName}--${label}`] = {
        ...sizeStyle,
        ...style,
      };
    });

    return result;
  }, {});
  return result;
};
