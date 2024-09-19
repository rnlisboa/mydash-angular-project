import { InMemoryDbService } from 'angular-in-memory-web-api'
import { RequestInfo  } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs'

export class MyInMemoryDbService implements InMemoryDbService {
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        const customers = [
            {id: 1, username: 'fred', password: '1234'},
            {id: 2, username: 'jhon',  password: '123456'},
        ]

        const products = [
            {id: 1, maker: 'Sangung', model: 'Galaxy'}
        ]

        return { customers, products}
    }
}