import { Invoice, Payment } from './classImplementInterface';
import { hasPrint } from './interfaceForClass';

const documentOne: hasPrint =  new Invoice('Vinamilk', 'drink milk', 50000000);
const documentTwo: hasPrint = new Payment('Vietam airline', 'fly', 25000000);

const allDocuments: hasPrint[] = [];

allDocuments.push(documentOne);
allDocuments.push(documentTwo);

console.log(allDocuments);