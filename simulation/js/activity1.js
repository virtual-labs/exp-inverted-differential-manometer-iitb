let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Pressure and its measurement</h4>

        <div class="fs-16px">
        <p style="text-align: center">Inverted U-tube Differential Manaometer</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    calculation();
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-weight: 400">Pipe A contains water and Pipe B contains a liquid of specific gravity 0.9. Manometric liquid is having specific gravity of 0.7. Find the pressure difference between pipe A and pipe B.</p>
        <div class="row">
            <div class="col-4">
                <p style="text-align: center; font-weight: 400">h<sub>1</sub> = ${h1} cm</p>
            </div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400">h<sub>2</sub> = ${h2} cm</p>
            </div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400">h<sub>m</sub> = ${hm} cm</p>
            </div>
        </div>
        <p style="text-align:center"><img src="images/sim1.png" style='width: 30%;'></p>
        <br>
        <p>Pressure difference between A and B</p>
        <p> $$ = \\rho_1 * g * h_1 - \\rho_2 * g * h_2 - \\rho_m * g * h_m $$</p>
        <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='pressure-inp'><span id='pressure-val-sp'></span> N/m<sup>2</sup>
        <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='verify_pressure();' id='temp-btn-2' >Verify</button></p>
    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculation() {
    hm = Math.floor(Math.random() * (4 + 1)) + 8;
    h1 = Math.floor(Math.random() * (4 + 1)) + 24;
    h2 = Math.floor(Math.random() * (4 + 1)) + 8;
    console.log("h1= ", h1);
    console.log("h2= ", h2);
    console.log("hm= ", hm);
    pressure = ((specific_gravity_1 * 1000) * gravity * (h1 / 100)) - ((specific_gravity_2 * 1000) * gravity * (h2 / 100)) - ((specific_gravity_3 * 1000) * gravity * (hm / 100));
    console.log("pressure= ", pressure);
    act2_pressure = ((specific_gravity_1 * 1000) * gravity * (h1 / 100)) - ((specific_gravity_1 * 1000) * gravity * (h2 / 100)) - ((specific_gravity_3 * 1000) * gravity * (hm / 100));
    console.log("act2 pressure= ", act2_pressure);
}
function verify_pressure() {
    let btn = document.getElementById('temp-btn-2');
    let pressure_inp = document.getElementById('pressure-inp');
    let sp1 = document.getElementById('pressure-val-sp');
    console.log("inp pressure= ", pressure);
    if (!verify_values(parseFloat(parseFloat(pressure_inp.value).toFixed(2)), parseFloat(pressure.toFixed(2)))) {
        alert(`incorrect value of pressure`);
        return;
    }
    pressure_inp.remove();
    sp1.innerText = `${parseFloat(pressure.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    start_act2();
}
activity1();
//# sourceMappingURL=activity1.js.map