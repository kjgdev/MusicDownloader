import SQLite from "react-native-sqlite-storage";
const DATABASE_NAME = 'data.db';


interface CollectionTable {
    name: String,
    thumbnail: String
}

const CreateTable = () => {
    let query = 'CREATE TABLE Collection (id INTEGER PRIMARY KEY AUTOINCREMENT, name NVARCHAR(255),thumbnail VARCHAR(255))';

    return new Promise((resolve, reject) => {
        SQLite.openDatabase({ name: DATABASE_NAME })
            .then((res) => {
                res.executeSql(query, [])
                    .then(() => {
                        resolve({ status: 200 })
                    }).catch(err => {
                        reject({ status: 500, error: err })
                    })
            })
            .catch(err => {
                reject(err)
            })
    })
}

const InsertItem = (props: CollectionTable) => {
    let query = 'INSERT INTO Collection (name,thumbnail) VALUES (?,?)';

    return new Promise((resolve, reject) => {
        SQLite.openDatabase({ name: DATABASE_NAME })
            .then((res) => {
                res.executeSql(query, [props.name, props.thumbnail])
                    .then(() => {
                        resolve({ status: 200 })
                    })
                    .catch(() => {
                        reject({ status: 500, error: "Error insert database" })
                    })
            })
            .catch(() => {
                reject({ status: 500, error: "Error insert database" })
            })
    })
}

const SelectAll = () => {
    return new Promise((resolve, reject) => {
        SQLite.openDatabase({ name: DATABASE_NAME })
            .then((res) => {
                res.transaction((tx) => {
                    tx.executeSql('SELECT * FROM Collection', [])
                        .then(([tx, result]) => {
                            let data: any[] = []
                            for (let i = 0; i < result.rows.length; i++) {
                                let row = result.rows.item(i);
                                data.push(row)
                            }
                            resolve(data)
                        }).catch(err => {
                            reject({ status: 500, error: "Error select database" })
                        })
                }).catch(err => {
                    reject({ status: 500, error: "Error select database" })
                })
            }).catch(err => {
                reject({ status: 500, error: "Error select database" })
            })
    })
}

const dboCollection = {
    InsertItem,
    SelectAll,
    CreateTable
}

export default dboCollection;