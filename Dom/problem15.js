function capitalizeNames(names) {
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i][0].toUpperCase() + names[i].slice(1);
  }
  return names;
}

console.log(capitalizeNames(["john", "mary", "peter"]));
