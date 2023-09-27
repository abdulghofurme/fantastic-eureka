const classPrefix = ".mkr_ty-headline";

module.exports = function ({ theme }) {
  const generalStyle = {
    fontFamily: theme("fontFamily.nunito"),
  };
  const sizes = [
    {
      label: "1",
      additionalStyle: {
        lineHeight: "72px",
      },
    },
    {
      label: "2",
      additionalStyle: {
        lineHeight: "64px",
      },
    },
    {
      label: "3",
      additionalStyle: {
        lineHeight: "56px",
      },
    },
    {
      label: "4",
      additionalStyle: {
        lineHeight: "48px",
      },
    },
    {
      label: "5",
      additionalStyle: {
        lineHeight: "36px",
      },
    },
    {
      label: "6",
      additionalStyle: {
        lineHeight: "32px",
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
        fontWeight: theme("fontWeight.bold"),
      },
    },
  ];
  const result = sizes.reduce((result, { label: size, additionalStyle }) => {
    const sizeClassName = `${classPrefix}-${size}`;
    const sizeStyle = {
      ...generalStyle,
      ...(additionalStyle || {}),
      fontSize: theme(`fontSize.desktop-heading-${size}`),
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
