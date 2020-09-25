import {BankAccount} from './bank-account'
import { AccountType } from './enums'

export class CheckingAccount extends BankAccount {
    accountType = AccountType.Checking;

     constructor(accountSettings: any){
         super(accountSettings)

     }
     getAccountInfo() {
        return{};
    }
}
