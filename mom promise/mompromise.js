var momPromise = new Promise((resolve, reject) => {
    momsSaving = 20000;
    phonePrice = 6000;
    if (momsSaving > phonePrice) {
        resolve({
            brand: "iPhone",
            model: "6s"
        });
    } else {
        reject("We do not have enough money.")
    }
});

momPromise.then((value) => {
    console.log("I got the phone,YAY!", value);
});

momPromise.catch((reason) => {
    console.log("Mom couldn't buy me the phone.", reason);
});

momPromise.finally(() => {
    console.log("Irrespective of whether my mom can buy me a phone or not, I still love her.");
});