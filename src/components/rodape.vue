<template>
    <footer>
        <div class="bottom-details">
            <div class="bottom_text">
                <span class="copyright_text">Copyright © 2023 All rights reserved</span>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer .bottom-details{
  width: 100%;
  background: #d85daf;
  display: flex;
  align-items: center;
}
footer .bottom-details .bottom_text{
  max-width: 1250px;
  margin: auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
}
.bottom-details .bottom_text span,
.bottom-details .bottom_text a{
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}
.bottom-details .bottom_text a:hover{
  opacity: 1;
  text-decoration: underline;
}
.bottom-details .bottom_text a{
  margin-right: 10px;
}
</style>