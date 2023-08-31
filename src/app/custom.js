export const submitEvent = (event) => {
  const exp = event.target.getAttribute('data-function');

  if (exp) {
    functionPlot({
      target: '#graph',
      width: innerWidth - 0.075 * innerWidth,
      height: 320,
      yAxis: { domain: [-25, 50] },
      grid: true,
      data: [
        {
          fn: exp,
        },
      ],
    });
  } else {
    console.log('No expression was found.');
  }
};
