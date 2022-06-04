export default function (data, error, key, label) {
    if (!data[key]) {
        error[key] = `${label} обязательное поле`;
    } else {
        delete error[key];
    }
}