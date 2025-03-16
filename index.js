export default function fakeName() {
  const firstName = ["Lucas", "Mateus", "Gabriel", "Felipe", "Henrique", "André", "Rafael", "Daniel", "Vinícius", "Gustavo"];
  const lastName = ["Silva", "Souza", "Oliveira", "Santos", "Pereira", "Costa", "Rodrigues", "Martins", "Lima", "Barbosa"];
  const i = Math.floor(Math.random() * 10);

  return `${firstName[i]} ${lastName[i]}`
}