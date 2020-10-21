/* var i;

for (i = 1; i < 100; i++) {
  console.log(i);

  if (i === 50) {
    break;
  }
} */

/* for (i = 1; i <= 100; i++) {
  if (i % 5 !== 0) {
    continue;
  }

  console.log(i);
} */

// 6. Modifica exemplul astfel incat bucla sa numere de la 1 la 89.
for (let i = 1; i <= 89; i++) {
  console.log(i);
}
// 7. Modifica exemplul astfel incat bucla sa numere de la 1 la 88 .
for (let i = 1; i <= 89 - 1; i++) {
  console.log(i);
}
// 8. Folosind keywordul break opreste bucla
// atunci cand numarul este egal cu 42.
for (let i = 1; i <= 89 - 1; i++) {
  if (i === 42) {
    break;
  }

  console.log(i);
}
// 9. Folosind keywordul continue, afiseaza
// doar numele impare intre 1 si 89.
for (let i = 1; i <= 89; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

// 10. In mod similar, afiseaza doar
// numerele care sunt divizibile cu 3.
for (let i = 1; i <= 89; i++) {
  if (i % 3 !== 0) {
    continue;
  }

  console.log(i);
}
