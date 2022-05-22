<template>
    <section>
        <Header />
        <div class="flex">
            <ColorPicker />
            <Pageresult />
        </div>
    </section>
</template>

<script>
import Header from "./components/Header"
import ColorPicker from "./components/ColorPicker"
import Pageresult from "./components/Pageresult"
export default {
    components: {
        Header,
        ColorPicker,
        Pageresult
    }
}
</script>

<style>
    .flex{
    display: flex;
    flex-direction: row;
    gap: 4rem;
    padding: 0 60px;
    }
</style>