<div class="emoji">👋</div>

<style>
    .emoji {
        font-size: 3rem;
        display: inline-block;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .emoji:hover {
        animation: wave 0.6s infinite ease-in-out;
    }

    @keyframes wave {
        0%,
        100% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(20deg);
        }
        50% {
            transform: rotate(-20deg);
        }
        75% {
            transform: rotate(20deg);
        }
    }
</style>
