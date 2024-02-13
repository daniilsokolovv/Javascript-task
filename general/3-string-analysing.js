const path = "/users/project/index.html"

const isHtml = path => {
  const requiredExt = ".html";
  const pathExt = path.slice(-5);

  return pathExt === requiredExt
}

console.log(isHtml(path));