function calculateWeight() {
    const frameWeight = document.getElementById('frame-weight').value;
    const batteryWeight = document.getElementById('battery-weight').value;
    const motorWeight = document.getElementById('motor-weight').value;
    const propellerWeight = document.getElementById('propeller-weight').value;
    const payloadWeight = document.getElementById('payload-weight').value;

    const totalWeight = parseFloat(frameWeight) + parseFloat(batteryWeight) + parseFloat(motorWeight) + parseFloat(propellerWeight) + parseFloat(payloadWeight);

    document.getElementById('total-weight').innerText = `Total Weight: ${totalWeight} grams`;
}
