<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$Extra-large: "only screen and (max-width : 1200px)";
$Large: "only screen and (max-width : 992px)";
$Medium: "only screen and (max-width : 768px)";
$Small: "only screen and (max-width : 650px)";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  outline: none;
  padding: 0;
}

html,
body {
  font-family: "PingFang TC", "Heiti TC", "Microsoft JhengHei", Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 0;
  height: 100%;
  line-height: 1.5;
  background-color: #fbf8f5;
}

body {
  align-items: center;
  display: flex;
}

  input[type="number"],
  input[type="text"] {
    padding: 4px 5px;
    font-size: 90%;
  }

  input[type="radio"] {
    margin-right: 7px;
  }

    label {
    display: inline-block;
    width: 90px;
  }

  hr {
    flex: 0 100%;
    height: 1px;
    border: 0;
    background-color: #d4d4d4;
  }

  a {
    display: block;
    color: #000000;
    text-decoration: none;
  }

    #app {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    flex: 0 0 1170px;
    background-color: #ffffff;
    @media #{$Extra-large} {
      flex: 0 0 980px;
    }
    @media #{$Large} {
      flex: 0 0 730px;
    }
    @media #{$Medium} {
      flex: 0 0 650px;
    }
    @media #{$Small} {
      flex: 1;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 1170px;
    padding: 1.5em;
    @media #{$Extra-large} {
      flex: 0 0 980px;
    }
    @media #{$Large} {
      flex: 0 0 730px;
    }
    @media #{$Medium} {
      flex: 0 0 650px;
    }
    @media #{$Small} {
      flex: 1;
    }
  }
</style>
