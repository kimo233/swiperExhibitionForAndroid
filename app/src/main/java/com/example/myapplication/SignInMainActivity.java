package com.example.myapplication;


import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Base64;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.viewpager.widget.PagerAdapter;
import androidx.viewpager.widget.ViewPager;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;


public class SignInMainActivity extends Activity {

    private String a="";


    public String Bitmap2StrByBase64(Bitmap bit){
        ByteArrayOutputStream bos=new ByteArrayOutputStream();
        bit.compress(Bitmap.CompressFormat.JPEG, 40, bos);//第二个入参表示图片压缩率，如果是100就表示不压缩
        byte[] bytes=bos.toByteArray();
        return Base64.encodeToString(bytes, Base64.DEFAULT);
    }

    public static Bitmap stringToBitmap(String a) {
        byte[] decodedString = Base64.decode(a, Base64.DEFAULT);
        Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
        return decodedByte;
    }


    private int imageIds[] = {
            R.drawable.background
    };

    private ArrayList<ImageView> images = new ArrayList<>();
    private ViewPager vp;
    private int oldPosition = 0;//记录上一次点的位置
    private int currentItem = 0; //当前页面
    private ScheduledExecutorService scheduledExecutorService;
    //图片标题
    private String titles[] = new String[]{"图片1"};
    private ArrayList<View> dots = new ArrayList<View>();;
    private TextView title;

    private Button color;
    private Bitmap bg;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        a=Bitmap2StrByBase64(BitmapFactory.decodeResource(getResources(), R.drawable.background));
        bg= stringToBitmap(a);
        Slide();//实现滑动功能的函数
        System.out.println(images);
    }

    public void Slide(){
//        for (int i = 0; i < imageIds.length; i++) {
//            ImageView imageView = new ImageView(this);
//
//            imageView.setImageBitmap(background);
//
//            images.add(imageView);
//        }

        ImageView imageView = new ImageView(this);
        imageView.setImageBitmap(bg);
        images.add(imageView);


        //显示的点 加入集合
        dots.add(findViewById(R.id.dot_0));
        dots.add(findViewById(R.id.dot_1));
        dots.add(findViewById(R.id.dot_2));
        dots.add(findViewById(R.id.dot_3));
        dots.add(findViewById(R.id.dot_4));

        //获取图片标题的id
        title = (TextView) findViewById(R.id.tv_test_title);

        //获取ViewPager 的id
        vp = (ViewPager) findViewById(R.id.vp);
        vp.setAdapter(new ViewPagerAdapter());
        vp.setOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

            }

            @Override
            public void onPageSelected(int position) {
                //设置页面刷新后的图片标题
                title.setText(titles[position]);
                oldPosition = position;
                currentItem = position;
            }

            @Override
            public void onPageScrollStateChanged(int state) {

            }
        });
    }


    class ViewPagerAdapter extends PagerAdapter {

        @Override
        public int getCount() {
            return images.size();
        }

        @Override
        public boolean isViewFromObject(View view, Object object) {
            return view==object;
        }

        @Override
        public void destroyItem(ViewGroup container, int position, Object object) {
            //将试图移除试图组
            View v =images.get(position);
            container.removeView(v);
        }

        @Override
        public Object instantiateItem(ViewGroup container, int position) {
            //将试图添加进试图组
            View v =images.get(position);
            container.addView(v);
            return v;
        }

    }

    @Override
    protected void onStart() {
        super.onStart();
        scheduledExecutorService = Executors.newSingleThreadScheduledExecutor();
        //每隔三秒换一张图片
        scheduledExecutorService.scheduleWithFixedDelay(new ViewPagerTask(),3,3, TimeUnit.SECONDS);//TimeUnit.SECONDS);

    }
    //实现一个碎片的接口
    class ViewPagerTask implements Runnable{

        @Override
        public void run() {
            currentItem = (currentItem+1)%images.size();
            //更新界面
            handler.obtainMessage().sendToTarget();
        }
    }
    //在handler进行碎片跳转
    Handler handler = new Handler(){
        @Override
        public void handleMessage(Message msg) {
            vp.setCurrentItem(currentItem);
        }
    };

}