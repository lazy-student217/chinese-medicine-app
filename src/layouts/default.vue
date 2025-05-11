<template>
    <div class="flex min-h-screen flex-col">
        <AppHeader />
        <div class="mb-8 px-6 lg:px-10">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>
