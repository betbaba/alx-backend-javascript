/// <reference types="./crud">
import {RowID, RowElement} from './interface';
import * as CRUD from './crud.js';

row: RowElement{
	firstName: 'Guillaume';
	lastName: 'Salva';
}

const newRowID: RowID = CRUD.insertRow(row);
const updateRow: RowElement = {
	..row,
	age: 23
};


CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
