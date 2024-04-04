<script lang=ts>
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  let greeting = ''

  currentHour < 12 ? greeting = "Buenos dias" :
  currentHour < 18 ? greeting = "Buenas tardes" :
  greeting = "Buenas noches" 
</script>

<h1 class="text-4xl font-bold">{greeting}</h1>