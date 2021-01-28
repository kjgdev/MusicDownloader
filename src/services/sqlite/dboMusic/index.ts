import SQLite from "react-native-sqlite-storage";
const DATABASE_NAME = 'data.db';


interface MusicTable {
	name: String,
	thumbnail: String,
	duration: number,
	quality: String,
	size: String,
	status: boolean,
	id_collection: number,
	path:String
}

const CreateTable = () => {
	let query =
		`CREATE TABLE Music (
        	id INTEGER PRIMARY KEY AUTOINCREMENT,
          	name NVARCHAR(255),
          	thumbnail VARCHAR(255),
          	duration INTEGER,
          	quality VARCHAR(10),
          	size VARCHAR(255),
          	status BOOL,
			id_collection INTEGER,
			path VARCHAR(255),
         	FOREIGN KEY (id_collection) REFERENCES Collection(id)
    )`;

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

const InsertItem = (props: MusicTable) => {
	let query = `INSERT INTO Music (name,thumbnail,duration,quality,size,status,id_collection,path) VALUES (?,?,?,?,?,?,?,?);`;

	return new Promise((resolve, reject) => {
		SQLite.openDatabase({ name: DATABASE_NAME })
			.then((res) => {
				res.executeSql(query, [props.name, props.thumbnail, props.duration, props.quality, props.size, props.status, props.id_collection,props.path])
					.then(() => {
						resolve({ status: 200 })
					})
					.catch(() => {
						CreateTable().then(() => {
							InsertItem(props)
						})
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
					tx.executeSql('SELECT * FROM Music', [])
						.then(([tx, result]) => {
							let data: any[] = []
							for (let i = 0; i < result.rows.length; i++) {
								let row = result.rows.item(i);
								data.push(row)
							}
							resolve(data)
						}).catch(err => {
							console.log("🚀 ~ file: index.ts ~ line 85 ~ returnnewPromise ~ err", err)
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

const dboMusic = {
	InsertItem,
	SelectAll,
	CreateTable
}

export default dboMusic;