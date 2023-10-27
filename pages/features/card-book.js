/* eslint-disable @next/next/no-img-element */
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export default function Page() {
  return (
    <>
      <NextHead title="Sách sưu tập" />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Sách sưu tập' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">Sách sưu tập</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <p>
                Sách sưu tập là một tính năng tăng nhẹ lực chiến dựa trên các võ sĩ đã sở hữu, đồng
                thời hỗ trợ người chơi trong các chế độ khác nhau.
              </p>
              <h3>Card Book - Sách sưu tập</h3>
              <p>
                <img src="https://i.imgur.com/wzK469m.png" alt="" className="h-auto w-full" />
              </p>
              <p>Có 10 bộ sách tất cả, mỗi bộ sách bao gồm các võ sĩ riêng biệt. </p>
              <p>
                Các bộ sách tăng các chỉ số cơ bản là ATK - DEF - HP. Đồng thời mỗi bộ sách sẽ hỗ
                trợ 1 hiệu quả khác nhau.
              </p>
              <p>
                Sở hữu võ sĩ, tăng đẳng - sao - cấp trang bị - sao trang bị để tăng điểm cho võ sĩ
                đó, góp phần tăng điểm và lên cấp cho bộ sách.
              </p>
              <p>
                <strong>Thông tin về các bộ sách:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Fatal Fury</strong>: Tăng thưởng nhận được của chế độ Nữ vs Nữ (%)
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Art of Fighting</strong>: Tăng số lượt đấu trường miên phí
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Three Clans</strong>: Tăng thưởng nhận được của chế độ Tháo xe vàng
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Hakkesshu</strong>: Tăng thưởng nhân được của chế độ Xóa ảo ảnh
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Chinese Kung Fu</strong>: Tăng EXP trong Tập luyện hội quán
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Ikari Team</strong>: Giảm vàng tiêu hao trong Tinh luyện Thần khí
                  </p>
                </li>
                <li>
                  <p>
                    <strong>All Leaders</strong>: Tăng thưởng nhận được của chế độ Gỡ thùng EXP
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Classic Group</strong>: Giảm thời gian chờ đấu trường
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Nests Characters</strong>: Tăng công thủ trong Vượt tháp
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Distant Land</strong>: Nhận rương mảnh Sách sưu tập hàng ngày
                  </p>
                </li>
              </ul>
              <h3>Hồ sơ Số mệnh - Fate File</h3>
              <p>
                <img src="https://i.imgur.com/E0rOciS.png" alt="" className="h-auto w-full" />
              </p>
              <p>
                Chỉ võ sĩ đã sở hữu mới xuất hiện, nếu sở hữu nhiều phiên bản của 1 võ sĩ, chỉ hiển
                thị tư chất cao nhất.
              </p>
              <p>Mỗi trang có 2 nhánh đỏ - xanh riêng biệt, độc lập với nhau.</p>
              <p>
                Sử dụng Mảnh Dữ liệu để mở khóa các ô (nhận được từ Võ đài), các ô phải được mở khóa
                theo thứ tự, càng về sau số mảnh yêu cầu để mở 1 ô càng nhiều.
              </p>
              <p>
                Khi đáp ứng được các bộ trong cùng nhánh, kích hoạt hiệu quả và hiển thị ở góc phải
                của trang.
              </p>
              <p>
                Võ sĩ được gắn vào phải phù hợp với tiêu chí của ô, chỉ hiển thị tư chất cao nhất.
                Nếu một võ sĩ sở hữu nhiều phiên bản, có thể cùng lúc đáp ứng được nhiều tiêu chí.
              </p>
              <p>Chỉ số nhóm được tăng thêm dựa trên tư chất các võ sĩ có trong nhóm.</p>
              <p>
                Chi tiết về các nhóm võ sĩ có thể xem tại phần <strong>Group List</strong>.
              </p>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
