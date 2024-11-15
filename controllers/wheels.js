exports.getCustomizeWheel = (req, res, next) => {
  res.render('customize-wheel', {
    pageTitle: 'Customize Wheel',
    path: '/customize-wheel',
    formCSS: true,
    productCSS: true,
    activeAddWheel: true
  })
}