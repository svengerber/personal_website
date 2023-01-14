<script>
    const messages = ["Hi", "Hello", "Hola", "Hey there","Welcome"]
    const greeting = messages[(Math.floor(Math.random() * messages.length))];
</script>

<div>
<span
class="bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 dark:from-primary-main dark:via-primary-main dark:to-primary-main bg-clip-text text-transparent"
>
{greeting}!
</span>
</div>
