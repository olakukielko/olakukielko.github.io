export var hideToBottomKeyframes = () => {
    return [{ opacity: 1, transform: "translateY(0vh)" },
    { opacity: 0, transform: "translateY(30vh)" },
    { opacity: 0, transform: "translateY(0vh)" }];
}
export var appearInFromBottomKeyframes = () => {
    return [{ opacity: 0, transform: "translateY(30vh)" },
    { opacity: 1, transform: "translateY(0vh)" }];
}
export var appearInFromLeftKeyframes = () => {
    return [{ opacity: 0, transform: "translateX(-10vh)" },
    { opacity: 1, transform: "translateX(0vh)" }];
}
export var appearInFromRightKeyframes = () => {
    return [{ opacity: 0, transform: "translateX(10vh)" },
    { opacity: 1, transform: "translateX(0vh)" }];
}
export var leafAppearKeyframes = () => {
    return [{ offset: 0, opacity: 0, transform: "scale(0.5)" },
    { offset: 0.5, opacity: 1, transform: "scale(1.2)" },
    { offset: 0.7, opacity: 1, transform: "scale(1) rotate(20deg)" },
    { offset: 0.8, opacity: 1, transform: "scale(1) rotate(-10deg)" },
    { offset: 1, opacity: 1, transform: "scale(1) rotate(0deg)" }];
}
export var leafDisappearKeyFrames = () => {
    return [{ transform: "scale(1)" }, { transform: "scale(1.2)" },{transform: "scale(0)"}];
}
export var flipInAnimationKeyframes = () => {
    return [{ opacity:0, easing: "ease-in", transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", offset: 0 },
    { easing: "ease-in", transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)", offset: 0.4 },
    { opacity:1, transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)", offset: 0.6 },
    { opacity:1, transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)", offset: 0.8 },
    { opacity:1, transform: "perspective(400px)", offset: 1 }];
}