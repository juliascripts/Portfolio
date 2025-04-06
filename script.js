<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#about")?.classList.add("reveal");
  });
</script>

function toggleMode() {
    const html = document.documentElement
    /* if(html.classList.contains('light')) {
      html.classList.remove('light')
      } else {
        html.classList.add('light') 
      }*/
    html.classList.toggle("light")
  } 
  
