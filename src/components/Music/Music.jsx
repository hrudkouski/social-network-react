import React from 'react';
import s from './Music.module.css'

const Music = () => {
    return (
        <div className={s.iFrame}>
            <iframe
                title={'music'}
                src="https://music.yandex.by/iframe/#album/10796449">Слушайте <a
                href='https://music.yandex.by/album/10796449'>Deep House Hits - The Classics</a> — <a
                href='https://music.yandex.by/artist/171'>сборник</a> на Яндекс.Музыке
            </iframe>
        </div>
    );
};

export default Music;