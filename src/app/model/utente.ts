export class Utente {
  email!: string;
  nome!: string;
  cognome!: string;
  data!: Date;
  password!: string;
  enabled!: boolean;
  role!: string;
  biglietto!: Array<Object>;
  cartaFedelta!: Object;
}
