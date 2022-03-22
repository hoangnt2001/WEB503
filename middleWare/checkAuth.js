export const checkAuth = (req, res,next) => {
    const status = true;
    if (status) {
        console.log("chào anh");
        next();
    }else{
        console.log("anh k có quyền truy cập");
    }
}