class UNENDLICH_PIPE {
    fuse(unend){
        return {
            cycle: unend.loop,
            first: unend.loop[0],
            last: unend.loop[unend.loop.length - 1]
        };
    }
}

window.UNENDLICH_PIPE = new UNENDLICH_PIPE();
