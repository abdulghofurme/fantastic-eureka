const classPrefix = ".mkr_btn";

module.exports = function (params) {
  const { theme, addComponents } = params;
	const typographyStyle = require('./typography/heading')(params)

  const generalStyle = {
		display: 'inline-block',
    height: "36px",
    padding: "0 32px",
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
    borderRadius: "8px",
    textAlign: "center",
		transition: 'all 150ms linear',
		...typographyStyle['.mkr_ty-heading-m']
  };

  const types = [
    {
      label: "primary",
      style: {
        backgroundColor: theme("colors.teal.500"),
        color: theme("colors.white"),
      },
      states: {
        hover: {
          backgroundColor: theme("colors.teal.600"),
          color: theme("colors.white"),
        },
        focus: {
          backgroundColor: theme("colors.teal.400"),
          color: theme("colors.white"),
        },
        active: {
          backgroundColor: theme("colors.teal.800"),
          color: theme("colors.gray.100"),
        },
        disabled: {
          backgroundColor: theme("colors.gray.50"),
          color: theme("colors.gray.300"),
        },
      },
    },
    {
      label: "primary--outlined",
      style: {
        border: `1px solid ${theme("colors.teal.500")}`,
        color: theme("colors.teal.500"),
      },
      states: {
        hover: {
          borderColor: theme("colors.teal.600"),
          color: theme("colors.teal.600"),
        },
        focus: {
          borderColor: theme("colors.teal.400"),
          color: theme("colors.teal.400"),
        },
        active: {
          borderColor: theme("colors.teal.600"),
          color: theme("colors.teal.600"),
          backgroundColor: theme("colors.gray.100"),
        },
        disabled: {
          backgroundColor: theme("colors.gray.50"),
          borderColor: theme("colors.gray.300"),
          color: theme("colors.gray.300"),
        },
      },
    }

  ];

  const result = types.reduce((result, { label, style, states }) => {
    const className = `${classPrefix}-${label}`;
    result[className] = {
      ...generalStyle,
      ...style,
    };

    Object.keys(states).forEach((stateKey) => {
      const stateStyle = states[stateKey];
      result[`${className}:${stateKey}`] = {
        ...generalStyle,
        ...stateStyle,
      };
      result[`${className}--${stateKey}`] = {
        ...generalStyle,
        ...stateStyle,
      };
 
    });
    return result;
  }, {});

  // console.log(result)
  addComponents(result);
};
