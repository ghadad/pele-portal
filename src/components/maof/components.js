 Vue.component("emp-details", {
     template: `<div><h2> {{data.title}}</h2>
    <table class="pele_rtl text-right">
                <tbody>
                  <tr><td class="label">שם: </td><td class="info"> {{data.CREATOR}}</td></tr>
                  <tr><td class="label">ת.ז.: </td><td class="info"> {{data.EMP_NUMBER}}</td></tr>
                  <tr><td class="label">מספר טופס: </td><td class="info"> {{data.DOC_INIT_ID}}</td></tr>
                  <tr><td class="label">ת. יצירה: </td><td class="info"> {{data.SENT_DATE}}</td></tr>
                  <tr><td class="label">מחלקה: </td><td class="info"> {{data.DEPARTMENT}}</td></tr>
                  <tr><td class="label">חטיבה: </td><td class="info"> {{data.SECTOR}}</td></tr>
                </tbody>
              </table>
              </div>`,
     props: {
         data: Object
     },
     data: function () {
         return {
             ui: null
         }
     }
 });

 Vue.component("vac-available-hours", {
     template: `<div><h2>יתרת שעות חופשה</h2>
    <div class="col text-right pele_rtl" style="color:red;">{{data.HOLIDAY_BALANCE}}</div>
              </div>`,
     props: {
         data: Object
     },
     data: function () {
         return {

         }
     }
 });

 Vue.component("missing-report", {
     template: `<h2>העדרויות</h2>`,
     props: {
         data: Object
     }
 })
 Vue.component("aprovers", {
     template: `<h2>מאשרים</h2>`,
     props: {
         data: Object
     }
 })

 Vue.component("actions", {
     template: `<div><h2>פעולות</h2>
     <button>אשר</button>
     <button>אשר עם הערה</button>

     </div>`,
     props: {
         data: Object
     }
 })