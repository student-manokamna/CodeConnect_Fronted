import React, { useState, useRef } from 'react'

const UserCard = ({user, onSwipe}) => {
    const {firstName,lastName,age,gender,about}=user;
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const [cardTransform, setCardTransform] = useState('');
    const cardRef = useRef(null);
    
    console.log(user)

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        e.preventDefault();
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        setCurrentX(diffX);
        
        const rotation = diffX * 0.1;
        const opacity = Math.max(0.3, 1 - Math.abs(diffX) / 300);
        
        setCardTransform(`translateX(${diffX}px) rotate(${rotation}deg)`);
        cardRef.current.style.opacity = opacity;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diffX = currentX - startX;
        setCurrentX(diffX);
        
        const rotation = diffX * 0.1;
        const opacity = Math.max(0.3, 1 - Math.abs(diffX) / 300);
        
        setCardTransform(`translateX(${diffX}px) rotate(${rotation}deg)`);
        cardRef.current.style.opacity = opacity;
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        
        const threshold = 100;
        
        if (Math.abs(currentX) > threshold) {
            const direction = currentX > 0 ? 'right' : 'left';
            const finalX = currentX > 0 ? 1000 : -1000;
            
            setCardTransform(`translateX(${finalX}px) rotate(${currentX > 0 ? 30 : -30}deg)`);
            cardRef.current.style.opacity = 0;
            cardRef.current.style.zIndex = 1; // Lower z-index when swiped
            
            setTimeout(() => {
                onSwipe(direction, user);
            }, 300);
        } else {
            // Snap back to center
            setCardTransform('');
            cardRef.current.style.opacity = 1;
        }
        
        setCurrentX(0);
    };

    const handleIgnore = () => {
        setCardTransform('translateX(-1000px) rotate(-30deg)');
        cardRef.current.style.opacity = 0;
        cardRef.current.style.zIndex = 1; // Lower z-index when swiped
        setTimeout(() => {
            onSwipe('left', user);
        }, 300);
    };

    const handleInterested = () => {
        setCardTransform('translateX(1000px) rotate(30deg)');
        cardRef.current.style.opacity = 0;
        cardRef.current.style.zIndex = 1; // Lower z-index when swiped
        setTimeout(() => {
            onSwipe('right', user);
        }, 300);
    };

    return (
        <div 
            ref={cardRef}
            className="card bg-base-300 w-96 shadow-xl cursor-grab active:cursor-grabbing select-none"
            style={{
                transform: cardTransform,
                transition: isDragging ? 'none' : 'all 0.3s ease-out',
                touchAction: 'none'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
        >
            <figure>
                <img
                    src={"https://th.bing.com/th?id=OIP.9vm7eDbnZS6Yy4ETUfEBAgHaGw&w=261&h=238&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"}
                    alt="Profile"
                    draggable={false}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName +" "+ lastName}</h2>
                {age&&gender&&<p>{age +  " "+ gender}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-primary" onClick={handleIgnore}>Ignore</button>
                    <button className="btn btn-secondary" onClick={handleInterested}>Interested</button>
                </div>
            </div>
            
            {/* Swipe indicators */}
            {isDragging && (
                <>
                    <div 
                        className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg transform -rotate-12"
                        style={{opacity: currentX < -50 ? Math.min(1, Math.abs(currentX) / 150) : 0}}
                    >
                        NOPE
                    </div>
                    <div 
                        className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg transform rotate-12"
                        style={{opacity: currentX > 50 ? Math.min(1, currentX / 150) : 0}}
                    >
                        LIKE
                    </div>
                </>
            )}
        </div>
    )
}

export default UserCard