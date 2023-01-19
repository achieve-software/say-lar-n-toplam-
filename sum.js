//1 den- kullanıcıdan aldığın n sayısına kadar sayıların toplamını göster

let sayi = prompt("kaça kadar sayı toplansın");
let sum = 0;
for (let i = 0; i <= sayi; i++) {
  sum = sum + i;
}
console.log("Girilen sayıya kadar toplam (girilen sayı da dahil); " + sum);
