<template>
    <div class="dataTimeFilter">
        <div class="data_time_btn mt">
            <div class="btn" @click="showData"> {{ getCurentDate }} {{ getCurentMounth }}</div>
            <div class="btn" @click="showTime"> {{ getSelectedHour }} : {{ getSelectedMinutes }} </div>
        </div>

        <div class="mt">
            <inputRangeDate :title="`Datum`"></inputRangeDate>
            <div class="subTextRange">
                <div>Jan</div>
                <div>Dec</div>
            </div>
        </div>
        <br>
        <div class="mt">
            <inputRangeDate :title="`Klockslag`"></inputRangeDate>
            <div class="subTextRange">
                <div>1</div>
                <div>24</div>
            </div>
        </div>
    </div>
</template>

<script>
    import inputRangeDate from "./inputRangeDate";
    export default {
        name: "DataTimeFilter",
        methods: {
            showData() {
                this.$router.push("/showDataTime/showData")
            },
            showTime() {
                this.$router.push("/showDataTime/showTime")
            }
        },
        computed: {
            /* method for generate days of month*/

            getCurentDate () {
                //console.log(this.$store.getters.getSlidesMinVal)
                return this.$store.getters.getSelectedDate;
            },

            getCurentMounth () {
                //console.log(this.$store.getters.getSlidesMaxVal)
                return this.$store.getters.getSelectedMounth;
            },

            getSelectedHour () {
                //console.log(this.$store.getters.getSlidesMinVal)
                return this.$store.getters.getSelectedHour;
            },

            getSelectedMinutes () {
                //console.log(this.$store.getters.getSlidesMaxVal)
                return this.$store.getters.getSelectedMinutes;
            }

            /*
            * Метод подсчёта дней месяца
            * const getDaysArray = (year, month) => {
  const monthIndex = month - 1
  const names = Object.freeze(
     [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]);
  const date = new Date(year, monthIndex, 1);
  const result = [];
  while (date.getMonth() == monthIndex) {
    result.push(`${date.getDate()}-${names[date.getDay()]}`);
    date.setDate(date.getDate() + 1);
  }
  return result;
}
* устанока "0" перед числом
*  result.push(`${date.getDate()}`.padStart(2,'0') + `-${names[date.getDay()]}`);
* */
        },
        components: {
            inputRangeDate
        }
    }
</script>

<style scoped>
    .dataTimeFilter {
        width: 99%;
        height: 50vh;

    }

    .data_time_btn {
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin: auto;
    }

    .mt {
        margin-top: 20px;
    }

    .subTextRange {
        display: flex;
        justify-content: space-between;

        color: #8e8e93;

        font-size: 11px;
        font-weight: 400;
        line-height: 15px;
    }

    .btn {
        width: 135px;
        height: 57px;
        border-radius: 28.5px;
        background: #ffffff;
        box-shadow: 0px 4px 16px rgba(0,0,0,0.15);

        text-align: center;
        line-height: 57px;

        cursor: pointer;
    }
</style>
