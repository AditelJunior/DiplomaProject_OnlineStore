
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true}));

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const propertiesForSearch = ['title', 'brand', 'caliber', 'origin'];

exports.updateSearchQueries = functions.region('europe-west3').firestore.document('products/{productId}')
    .onUpdate((change) => {
        const newData = change.after.data();
        const objectID = change.after.id;

        const searchQueries = [];

        propertiesForSearch.map(prop => {
            if (newData[prop]) {
                if (prop === 'title') {
                    searchQueries.push(
                        ...newData[prop].trim().split(/[,\n\s+]+/).map(s => {
                            if (s) {
                                return s.toLowerCase()
                            }
                        })
                    )
                } else {
                    searchQueries.push(newData[prop].toLowerCase());
                }
            }
        })
        if (newData._updatedBy) {
            admin.firestore().collection("products").doc(objectID).set({ "updated_at": newData._updatedBy.timestamp }, { merge: true })
        }
        admin.firestore().collection("products").doc(objectID).set({ "searchQueries": searchQueries }, { merge: true })
    });

exports.createSearchQueries = functions.region('europe-west3').firestore.document('products/{productId}')
    .onCreate((snapshot) => {

        const newData = snapshot.data();
        const objectID = snapshot.id;

        const searchQueries = [];

        propertiesForSearch.map(prop => {
            if (newData[prop]) {
                if (prop === 'title') {
                    searchQueries.push(
                        ...newData[prop].trim().split(/[,\n\s+]+/).map(s => {
                            if (s) {
                                return s.toLowerCase()
                            }
                        })
                    )
                } else {
                    searchQueries.push(newData[prop].toLowerCase());
                }
            }
        })
        if (newData._updatedBy) {
            admin.firestore().collection("products").doc(objectID).set({ "updated_at": newData._updatedBy.timestamp }, { merge: true })
        }
        admin.firestore().collection("products").doc(objectID).set({ "searchQueries": searchQueries }, { merge: true })
    });
